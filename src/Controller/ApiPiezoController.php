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

        //Info page about chosen measurement station: http://services.ades.eaufrance.fr/pointeau/03383X0147/F1

        $resultatStatements = $this->getResultApi('http://hubeau.eaufrance.fr/api/v1/niveaux_nappes/chroniques?code_bss=03383X0147/F1&size=5000');

        //Alternative code_bss for other measuring stations in and around Vittel:
        //03383X0051/V => 2010 - 2012
        //03383X0052/III => 1959 - 2012
        //03383X0095/F2 => 2010 - 2012
        //03383X0042/VII => 2010 - 2012
        //03382X0008/3 => 2010 - 2012
        //03382X0018/F2 => 2010 - 2012
        //03382X0043/F2 => 1967 - 2012
        //03382X0139/P401 => 1994
        //03383X0147/F1 => 2017 - 2021 (nappe Grès Trias Inférieur)
        //03382X0019/F2 => 1956 - 1979
        //03382X0016/F1 => 1976 - 1980

        //BSS codes of water measuring stations come from https://www.sandre.eaufrance.fr/atlas/srv/fre/catalog.search#/map

        $Piezodata = [];
        $Piezodate = [];
        $Piezovalue = [];
        //$Piezovalue_string = [];
        $Piezodate_formatted = [];
        //$Piezodate_formatted_string = [];

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

        //$Piezotest = $Piezodata[1];
        //$Piezotest2 = $Piezotest["piezovalue"];

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
