<?php

namespace App\Controller;

use App\Entity\User;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Doctrine\ORM\EntityManagerInterface;

class UserController extends AbstractController
{
    #[Route('/api/user', name: 'user_current', methods: ["GET"])]
    public function current(): JsonResponse
    {
        return $this->json([
            'message' => 'Welcome to your new controller!',
            'path' => 'src/Controller/UserController.php',
        ]);
    }

    #[Route('/api/user', name: 'user_register', methods: ["POST"])]
    public function register(Request $request,EntityManagerInterface $entityManager): JsonResponse
    {
        $user = new User();
        $user->setName($request->request->get('name'));
        $user->setEmail($request->request->get('email'));
        $user->setAddressNumber($request->request->get('address_number'));
        $user->setAddress($request->request->get('address'));
        $user->setCity($request->request->get('city'));
        $user->setPostcode($request->request->get('postcode'));
        $user->setName($request->request->get('password'));

        $entityManager->persist($user);
        $entityManager->flush();

        return $this->json([
            'name' => $request->request->get('name'),
            'email' => $request->request->get('email'),
            'address_number' => $request->request->get('address_number'),
            'address' => $request->request->get('address'),
            'city' => $request->request->get('city'),
            'postcode' => $request->request->get('postcode')
        ]);
    }
}
