import React from 'react';
import Container from '../common/Container';
import Link from '../common/Link';
import Image from 'next/image';
import { Room } from '@/types';

interface RoomShowcaseProps {
  rooms: Room[];
  className?: string;
}

export default function RoomShowcase({ rooms, className = '' }: RoomShowcaseProps) {
  return (
    <section className={`py-16 ${className}`}>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {rooms.map((room) => (
            <Link 
              key={room.id} 
              href={room.href}
              className="group block overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="relative h-64 bg-neutral-100">
                <Image
                  src={room.image}
                  alt={room.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-xl font-semibold">{room.title}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
