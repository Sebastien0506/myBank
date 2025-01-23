<?php

namespace App\Controller;

use App\Entity\Depences;
use App\Form\DepencesType;
use App\Repository\DepencesRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/depences')]
final class DepencesController extends AbstractController
{
    #[Route(name: 'add_depence', methods: ['POST'])]
    public function index(DepencesRepository $depencesRepository): Response
    {
        
    }

    
}
