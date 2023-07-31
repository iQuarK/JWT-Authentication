<?php

namespace App\Tests\Controller;

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class SessionControllerTest extends WebTestCase
{
 
    public function testLogin(): void
    {
        $client = static::createClient();
        $crawler = $client->request('POST', '/login', [
            'email' => 'luis.sanchez@email.com',
            'password' => 'a_text-plain_password'
        ]);
        $response = $client->getResponse();
        $this->assertResponseIsSuccessful();
        $data = json_decode($response->getContent(), true);
        $this->assertArrayHasKey('payload', $data);
        $this->assertObjectEquals($data['payload'], [
            'name'=>'Luis Sanchez',
            'email' => 'luis.sanchez@email.com',
            'address_number' => '17',
            'address' => 'Street Fighter',
            'city' => 'London',
            'postcode' => 'SE16'
        ]);
    }
}
