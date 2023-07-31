<?php

namespace App\Tests\Controller;

use App\Entity\Account;
use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class AccountControllerTest extends WebTestCase
{
    private static $email;

    public static function setUpBeforeClass(): void
    {
        $milliseconds = floor(microtime(true) * 1000);
        self::$email = 'test@'.$milliseconds.'.com';
    }

    public function testRegister(): void
    {
        $client = static::createClient();
        $client->request('POST', '/api/account',
            [
                'name'=>'Luis Sanchez',
                'email' => self::$email,
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
        $this->assertEquals($data['payload'], [
            'name'=>'Luis Sanchez',
            'email' => self::$email,
            'address_number' => '17',
            'address' => 'Street Fighter',
            'city' => 'London',
            'postcode' => 'SE16'
        ]);
    }

    public function testRegisterExisting(): void
    {
        $client = static::createClient();
        $client->request('POST', '/api/account',
            [
                'name'=>'Luis Sanchez',
                'email' => self::$email,
                'address_number' => '17',
                'address' => 'Street Fighter',
                'city' => 'London',
                'postcode' => 'SE16',
                'password' => 'a_text-plain_password'
            ]
        );
        $this->assertResponseStatusCodeSame(409);
    }

    public function testCurrent(): void
    {
        $client = static::createClient();
        $client->request('GET', '/api/login_check',
            [
                'email' => self::$email,
                'password' => 'a_text-plain_password'
            ]);
        $response = $client->getResponse();

        $client->request('GET', '/api/account');
        $response = $client->getResponse();
        $this->assertResponseIsSuccessful();
        $data = json_decode($response->getContent(), true);
        $this->assertArrayHasKey('payload', $data);
        $this->assertObjectEquals($data['payload'], [
            'name'=>'Luis Sanchez',
            'email' => self::$email,
            'address_number' => '17',
            'address' => 'Street Fighter',
            'city' => 'London',
            'postcode' => 'SE16'
        ]);
    }
}
