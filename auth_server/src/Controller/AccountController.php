<?php

namespace App\Controller;

use App\Entity\Account;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\DBAL\Exception\UniqueConstraintViolationException;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class AccountController extends AbstractController
{
    #[Route('/api/account', name: 'account_register', methods: ["POST"])]
    public function register(Request $request, EntityManagerInterface $entityManager, UserPasswordHasherInterface $passwordHasher): JsonResponse
    {
        $data = $request->toArray();
        $account = new Account();
        $account->setName($data['name']);
        $account->setEmail($data['email']);
        $account->setRoles(['USER_ACCOUNT']);

        $hashedPassword = $passwordHasher->hashPassword($account, $data['password']);
        $account->setPassword($hashedPassword);

        $entityManager->persist($account);
        try {
            $flush = $entityManager->flush();
            return $this->json([
                'payload' => [
                    'name' => $data['name'],
                    'email' => $data['email']
                ]
            ]);
        } catch (UniqueConstraintViolationException $e) {
            $email = $data['email'];
            return $this->json([
                'error' => "Account with email $email already exists."
            ], 409);
        }
    }
    #[Route('/api/account', name: 'account_update', methods: ["PUT"])]
    public function update(Request $request, EntityManagerInterface $entityManager): JsonResponse
    {
        $account = $entityManager->getRepository(Account::class)
            ->findBy(array('email' => $email));
        $account->setName($data['name']);
        $account->setAddressNumber($data['address_number']);
        $account->setAddress($data['address']);
        $account->setCity($data['city']);
        $account->setPostcode($data['postcode']);

        try {
            $flush = $entityManager->flush();
            return $this->json([
                'payload' => [
                    'name' => $data['name'],
                    'email' => $data['email'],
                    'address_number' => $data['address_number'],
                    'address' => $data['address'],
                    'city' => $data['city'],
                    'postcode' => $data['postcode']
                ]
            ]);
        } catch (Exception $e) {
            $email = $data['email'];
            return $this->json([
                'error' => "Account with email $email could not be updated."
            ], 402);
        }
    }
}
