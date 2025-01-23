<?php

namespace App\Controller;

use App\Entity\Depences;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

final class ApiController extends AbstractController
{
    #[Route('/api/data', name: 'api_data', methods: ['POST'])]
public function receiveData(Request $request, EntityManagerInterface $em): JsonResponse
{
    // Récupérer les données envoyées (JSON)
    $data = json_decode($request->getContent(), true);

    // Valider les données
    if (!$data || !isset($data['name']) || !isset($data['price'])) {
        return new JsonResponse(['message' => 'Invalid input'], 400);
    }

    // Créer une nouvelle instance de l'entité Depences
    $depence = new Depences();
    $depence->setName($data['name']); // Utilisez les setters pour affecter les valeurs
    $depence->setPrice($data['price']); // Utilisez les setters pour affecter les valeurs

    // Persister les données
    $em->persist($depence);
    $em->flush();

    // Retourner une réponse JSON
    return new JsonResponse([
        'message' => 'Data saved successfully!',
        'data' => [
            'id' => $depence->getId(),
            'name' => $depence->getName(),
            'price' => $depence->getPrice(),
        ],
    ], 201);
}
}
