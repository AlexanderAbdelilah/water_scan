<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
//use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpClient\HttpClient;
use Symfony\Component\HttpFoundation\JsonResponse;

class ApiPiezoController extends AbstractController
{
    /**
     * @Route("/api/piezo", name="api_piezo")
     */
    public function index(): Response
    {

        $resultatStatements = $this->getResultApi('http://hubeau.eaufrance.fr/api/v1/niveaux_nappes/chroniques?bss_id=BSS000YRNE%2FPZ1&size=5000');

        $Piezodata = [];
        $Piezodate = [];
        $Piezovalue = [];
        $Piezodate_formatted = [];

        $Piezo = $resultatStatements->data;
    
        //dd($Piezo[count($Piezo)-1]->date_mesure);
        
        for ($i = 0; $i <= count($Piezo)-1; $i++) {
            $subspush = array('piezodate' => $Piezo[$i]->date_mesure, 'piezovalue' => $Piezo[$i]->niveau_nappe_eau);
            array_push($Piezodata, $subspush);
        };

        for ($i = 0; $i <= count($Piezo)-1; $i++) {
            $subspush = $Piezo[$i]->date_mesure;
            array_push($Piezodate, $subspush);
            //$PdateJSON = \json_encode($Piezodate)
            $Piezodate_string = implode(', ', $Piezodate);
        };

        for ($i = 0; $i <= count($Piezodate)-1; $i++) {
            $subspush = substr_replace($Piezodate[$i], ':', 4, 1);
            $subspush_formatted = substr_replace($subspush, ':', 7, 1);
            array_push($Piezodate_formatted, $subspush_formatted);
            $Piezodate_formatted_string = implode(', ', $Piezodate_formatted);
        }; 

        for ($i = 0; $i <= count($Piezo)-1; $i++) {
            $subspush = $Piezo[$i]->niveau_nappe_eau;
            array_push($Piezovalue, $subspush);
            $Piezovalue_string = implode(', ', $Piezovalue);
        }

        //mesures du 21/05/2008 au 26/05/2021
        
        //dd($Piezodate_formatted);

        $Piezotest = $Piezodata[1];
        $Piezotest2 = $Piezotest["piezovalue"];

        //return $this->render('home/index.html.twig', [
            //'piezovalue' => $Piezovalue,
            //'piezodate'=> $Piezodate_formatted,
            //'piezodate_string' => $Piezodate_string,
            //'piezodate_formatted_string' => $Piezodate_formatted_string,
            //'piezovalue_string' => $Piezovalue_string,
        //    'piezo' => $Piezodata
        //]); 

        //Alternative for REACT routing:

        return new JsonResponse([
            //'piezo' => $Piezodata,
            'piezovalue'=> $Piezovalue,
            'piezodate'=> $Piezodate,
            'piezo' => $Piezodata
        ]);
        
    }

    private function getResultApi(string $url)
    {
        $httpClient = HttpClient::create();
        
        $responseCompany = $httpClient->request('GET', $url);

        $statusCode = $responseCompany->getStatusCode();
        // $statusCode = 200
        dump($statusCode);

        $contentCompany = $responseCompany->getContent();

        return json_decode($contentCompany);
    }
}
