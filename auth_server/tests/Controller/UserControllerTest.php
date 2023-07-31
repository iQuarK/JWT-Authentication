<?php

namespace App\Tests\Controller;

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class UserControllerTest extends WebTestCase
{
    public function testRegister(): void
    {
        $client = static::createClient();
        $crawler = $client->request('POST', '/user',
            [
                'name'=>'Luis Sanchez',
                'email' => 'luis.sanchez@email.com',
                'address_number' => '17',
                'address' => 'Street Fighter',
                'city' => 'London',
                'postcode' => 'SE16',
                'password' => 'a_text-plain_password'
            ]
        );
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

    public function testCurrent(): void
    {
        $client = static::createClient();
        // create login first
        $crawler = $client->request('GET', '/user');
        $response = $client->getResponse();
        $this->assertResponseIsSuccessful();
        $data = json_decode($response->getContent(), true);
        $this->assertArrayHasKey('payload', $data);
        $this->assertObjectEquals($data['payload'], [
            'name'=>'Luis Sanchez',
            'address_number' => '17',
            'address' => 'Street Fighter',
            'city' => 'London',
            'postcode' => 'SE16'
        ]);
    }
}
