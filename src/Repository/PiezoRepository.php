<?php

namespace App\Repository;

use App\Entity\Piezo;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Piezo|null find($id, $lockMode = null, $lockVersion = null)
 * @method Piezo|null findOneBy(array $criteria, array $orderBy = null)
 * @method Piezo[]    findAll()
 * @method Piezo[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PiezoRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Piezo::class);
    }

    // /**
    //  * @return Piezo[] Returns an array of Piezo objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('p')
            ->andWhere('p.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('p.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Piezo
    {
        return $this->createQueryBuilder('p')
            ->andWhere('p.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
