<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class AccountController extends AbstractController
{
    #[Route('/api/account', name: 'account_current', methods: ["GET"])]
    public function current(): JsonResponse
    {
        return $this->json([
            'message' => 'Welcome to your new controller!',
            'path' => 'src/Controller/AccountController.php',
        ]);
    }

    #[Route('/api/account', name: 'account_register', methods: ["POST"])]
    public function register(Request $request,EntityManagerInterface $entityManager): JsonResponse
    {
        return $this->json([
            'message' => 'Welcome to your new controller!',
            'path' => 'src/Controller/AccountController.php',
        ]);
    }
}
