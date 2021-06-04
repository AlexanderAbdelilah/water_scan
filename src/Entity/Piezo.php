<?php

namespace App\Entity;

use App\Repository\PiezoRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=PiezoRepository::class)
 */
class Piezo
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="date")
     */
    private $piezodate;

    /**
     * @ORM\Column(type="decimal", precision=5, scale=2)
     */
    private $piezovalue;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getPiezodate(): ?\DateTimeInterface
    {
        return $this->piezodate;
    }

    public function setPiezodate(\DateTimeInterface $piezodate): self
    {
        $this->piezodate = $piezodate;

        return $this;
    }

    public function getPiezovalue(): ?string
    {
        return $this->piezovalue;
    }

    public function setPiezovalue(string $piezovalue): self
    {
        $this->piezovalue = $piezovalue;

        return $this;
    }
}
