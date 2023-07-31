<?php

namespace App\Controller;

use App\Entity\Account;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\DBAL\Exception\UniqueConstraintViolationException;

class AccountController extends AbstractController
{
    #[Route('/api/account', name: 'account_current', methods: ["GET"])]
    public function current(): JsonResponse
    {
        return $this->json([
            'error' => 'To do'
        ], 500);
    }

    #[Route('/api/account', name: 'account_register', methods: ["POST"])]
    public function register(Request $request,EntityManagerInterface $entityManager): JsonResponse
    {
        $account = new Account();
        $account->setName($request->request->get('name'));
        $account->setEmail($request->request->get('email'));
        $account->setAddressNumber($request->request->get('address_number'));
        $account->setAddress($request->request->get('address'));
        $account->setCity($request->request->get('city'));
        $account->setPostcode($request->request->get('postcode'));
        $account->setPassword($request->request->get('password'));
        $account->setRoles(['USER_ACCOUNT']);

        $entityManager->persist($account);
        try {
            $flush = $entityManager->flush();
            print "FLUSH";
            var_dump($flush);
            return $this->json([
                'payload' => [
                    'name' => $request->request->get('name'),
                    'email' => $request->request->get('email'),
                    'address_number' => $request->request->get('address_number'),
                    'address' => $request->request->get('address'),
                    'city' => $request->request->get('city'),
                    'postcode' => $request->request->get('postcode')
                ]
            ]);
        } catch (UniqueConstraintViolationException $e) {
            $email = $request->request->get('email');
            return $this->json([
                'error' => "Account with email $email already exists."
            ], 409);
        }
    }
}
