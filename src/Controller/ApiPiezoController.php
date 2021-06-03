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

        $resultatStatements = $this->getResultApi('http://hubeau.eaufrance.fr/api/v1/niveaux_nappes/chroniques?code_bss=06252X0063%2FPZ1&size=5000');

        $Piezodata = [];
        $Piezodate = [];
        $Piezovalue = [];

        $Piezo = $resultatStatements->data;
    
        //dd($Piezo[count($Piezo)-1]->date_mesure);

        //foreach($Piezo as $p)
        //    $subspush = array('piezodate' => $p->date_mesure, 'piezovalue' => $p->niveau_nappe_eau);
        //    array_push($Piezodata, $subspush); 
        
        for ($i = 0; $i <= count($Piezo)-1; $i++) {
            $subspush = array('piezodate' => $Piezo[$i]->date_mesure, 'piezovalue' => $Piezo[$i]->niveau_nappe_eau);
            array_push($Piezodata, $subspush);
        }

        for ($i = 0; $i <= count($Piezo)-1; $i++) {
            $subspush = $Piezo[$i]->date_mesure;
            array_push($Piezodate, $subspush);
            //$Piezodate = $Piezodata[$i]->piezodate;
        }

        for ($i = 0; $i <= count($Piezo)-1; $i++) {
            $subspush = $Piezo[$i]->niveau_nappe_eau;
            array_push($Piezovalue, $subspush);
            //$Piezovalue = $Piezodata[$i]->piezovalue;
        }
        //mesures du 21/05/2008 au 26/05/2021
        //dd($Piezodata);

        //for ($i = 0; $i <= count($Piezo); $i++) {
        //    dump( $Piezo[$i]->date_mesure);
            //$subspush = array('piezodate' => $Piezo[$i]->date_mesure, 'piezovalue' => $Piezo[$i]->niveau_nappe_eau);
            //array_push($subsendresultsOne, $subspush);
        //}

        
        $Piezotest = $Piezodata[1];
        $Piezotest2 = $Piezotest["piezovalue"];
        //dd($Piezotest2);

        //return $this->render('home/index.html.twig', [
        //    'piezo' => $Piezotest2,
        //]); 
        //[
        return new JsonResponse([
            'piezo' => $Piezodata,
            'piezovalue'=> $Piezovalue,
            'piezodate'=> $Piezodate,
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
