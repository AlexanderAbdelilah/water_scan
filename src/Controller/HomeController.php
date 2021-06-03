<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class HomeController extends AbstractController
{
    /**
     * @Route("/", name="id_home")
     */
    public function home(): Response
    {
        return $this->render('home/index.html.twig', [
            'controller_name' => 'HomeController',
        ]);
    }

    ///**
    // * @Route("/result", name="id_result")
    // */
    //public function result(): Response
    //{
    //    return $this->render('home/result.html.twig', [
    //        'controller_name' => 'HomeController',
    //    ]);
    //}

    
}
