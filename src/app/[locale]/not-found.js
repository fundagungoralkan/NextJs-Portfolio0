"use client";
import Image from 'next/image';
import Link from 'next/link';
import { Container } from 'react-bootstrap';
import './not-found.scss';

export default function NotFound() {
  return (
    <Container className="not-found-container">
      <div className="image-wrapper">
        <Image
          src="/img/error/error.jpg"
          alt="404"
          fill           // Ekran boyutuna göre dolduracak
          sizes="(max-width: 768px) 100vw, 80vw" // Responsive boyutlandırma
          priority       // Yüklenme önceliği
          className="responsive-image"
        />
      </div>
      <Link href="/" className="btn">
        Return to Home
      </Link>
    </Container>
  );
}