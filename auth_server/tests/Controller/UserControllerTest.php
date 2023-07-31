<?php

namespace App\Tests\Controller;

use App\Entity\User;
use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;
use Doctrine\DBAL\Exception\UniqueConstraintViolationException;


class UserControllerTest extends WebTestCase
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
        $client->request('POST', '/api/user',
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
        print "Existing eMAIL: ".self::$email;
        $client = static::createClient();
        $client->request('POST', '/api/user',
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
        // create login first
        $crawler = $client->request('GET', '/api/user');
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
