<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
//use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpClient\HttpClient;
use Symfony\Component\HttpFoundation\JsonResponse;

class ApiPrelevementsController extends AbstractController
{
    /**
     * @Route("/api/prelevements", name="api_prelevements")
     */
    public function index(): Response
    {

        $results = $this->getResultApi('https://hubeau.eaufrance.fr/api/vbeta/prelevements/chroniques?code_commune_insee=&code_ouvrage=OPR0000588819&format=json&size=20');

        //$Piezodata = [];
        //$Piezodate = [];
        //$Piezovalue = [];
        //$Piezodate_formatted = [];
        $p_vittel = [];

        $p_results = $results->data;

        //dd($p_results);

        for ($i = 0; $i <= count($p_results)-1; $i++) {
            $subspush = array('p_year' => $p_results[$i]->annee, 'p_value' => $p_results[$i]->volume, 'p_city' => $p_results[$i]->nom_commune);
            array_push($p_vittel, $subspush);
        };
        //$Prelevements_volume = $resultatStatements->data->volume;
        //$Prelevements_year = $resultatStatements->data->annee;

        dump($p_vittel);

        //dump($Prelevements_volume);

        //dump($Prelevements_year);

        die;

        //API urls for Nestle PUMPING STATIONS in Vittel
        //https://hubeau.eaufrance.fr/api/vbeta/prelevements/chroniques?code_commune_insee=&code_ouvrage=OPR0000588819&format=json&size=20
        //https://hubeau.eaufrance.fr/api/vbeta/prelevements/chroniques?code_commune_insee=&code_ouvrage=OPR0000589391&format=json&size=20
        //https://hubeau.eaufrance.fr/api/vbeta/prelevements/chroniques?code_commune_insee=&code_ouvrage=OPR0000002103&format=json&size=20
        //https://hubeau.eaufrance.fr/api/vbeta/prelevements/chroniques?code_commune_insee=&code_ouvrage=OPR0000588833&format=json&size=20
        //https://hubeau.eaufrance.fr/api/vbeta/prelevements/chroniques?code_commune_insee=&code_ouvrage=OPR0000002104&format=json&size=20
        //https://hubeau.eaufrance.fr/api/vbeta/prelevements/chroniques?code_commune_insee=&code_ouvrage=OPR0000588820&format=json&size=20
        //https://hubeau.eaufrance.fr/api/vbeta/prelevements/chroniques?code_commune_insee=&code_ouvrage=OPR0000002108&format=json&size=20
        //https://hubeau.eaufrance.fr/api/vbeta/prelevements/chroniques?code_commune_insee=&code_ouvrage=OPR0000002099&format=json&size=20
        //https://hubeau.eaufrance.fr/api/vbeta/prelevements/chroniques?code_commune_insee=&code_ouvrage=OPR0000002109&format=json&size=20
        //https://hubeau.eaufrance.fr/api/vbeta/prelevements/chroniques?code_commune_insee=&code_ouvrage=OPR0000591784&format=json&size=20
        //https://hubeau.eaufrance.fr/api/vbeta/prelevements/chroniques?code_commune_insee=&code_ouvrage=OPR0000001926&format=json&size=20
        //https://hubeau.eaufrance.fr/api/vbeta/prelevements/chroniques?code_commune_insee=&code_ouvrage=OPR0000591783&format=json&size=20
        //https://hubeau.eaufrance.fr/api/vbeta/prelevements/chroniques?code_commune_insee=&code_ouvrage=OPR0000001920&format=json&size=20
        //https://hubeau.eaufrance.fr/api/vbeta/prelevements/chroniques?code_commune_insee=&code_ouvrage=OPR0000001925&format=json&size=20
        //https://hubeau.eaufrance.fr/api/vbeta/prelevements/chroniques?code_commune_insee=&code_ouvrage=OPR0000001923&format=json&size=20
        //https://hubeau.eaufrance.fr/api/vbeta/prelevements/chroniques?code_commune_insee=&code_ouvrage=OPR0000591785&format=json&size=20
        //https://hubeau.eaufrance.fr/api/vbeta/prelevements/chroniques?code_commune_insee=&code_ouvrage=OPR0000589392&format=json&size=20
        //https://hubeau.eaufrance.fr/api/vbeta/prelevements/chroniques?code_commune_insee=&code_ouvrage=OPR0000001924&format=json&size=20
        //https://hubeau.eaufrance.fr/api/vbeta/prelevements/chroniques?code_commune_insee=&code_ouvrage=OPR0000002100&format=json&size=20


        //return $this->render('home/index.html.twig', [
            //'piezovalue' => $Piezovalue,
            //'piezodate'=> $Piezodate_formatted,
            //'piezodate_string' => $Piezodate_string,
            //'piezodate_formatted_string' => $Piezodate_formatted_string,
            //'piezovalue_string' => $Piezovalue_string,
            //'piezo' => $Piezodata
        //]); 

        //Alternative for REACT routing:

        return new JsonResponse([
            'p_vittel' => $p_vittel,
            //'piezovalue'=> $Piezovalue,
            //'piezodate'=> $Piezodate,
            //'piezo' => $Piezodata
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
