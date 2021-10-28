import React from 'react'

import { SimpleGrid, Center } from '@chakra-ui/react'
import BackofficeCard from '../components/BackofficeCard'

import newsImg from '../assets/backnews.png'
import activitiesImg from '../assets/activities.png'
import categoriesImg from '../assets/categories.png'
import testimonialsImg from '../assets/testimonials.png'
import organizationImg from '../assets/organization.png'
import slidesImg from '../assets/slides.png'
import usersImg from '../assets/users.png'
import membersImg from '../assets/members.png'
import emailImg from '../assets/email.png'

const cardList = [
  {
    title: 'Novedades',
    img: newsImg,
    path: '/backoffice/listado-novedades/',
  },
  {
    title: 'Actividades',
    img: activitiesImg,
    path: '/backoffice/activities-list',
  },
  {
    title: 'Categorías',
    img: categoriesImg,
    path: '/backoffice/categorias',
  },
  {
    title: 'Testimonios',
    img: testimonialsImg,
    path: '/backoffice/testimonials-list',
  },
  {
    title: 'Organización',
    img: organizationImg,
    path: '/backoffice/edit-organization',
  },
  {
    title: 'Slides',
    img: slidesImg,
    path: '/backoffice/slides',
  },
  {
    title: 'Usuarios',
    img: usersImg,
    path: '/backoffice/usuarios',
  },
  {
    title: 'Miembros',
    img: membersImg,
    path: '/backoffice/miembros',
  },
  {
    title: 'Contactos',
    img: emailImg,
    path: '/backoffice/contactos',
  },
]

const LayoutBackoffice = () => {
  return (
    <>
      <Center>
        <SimpleGrid columns={[2, 2, 4, 4, 4]} bg='gray.100'>
          {cardList.map((cardInfo, index) => (
            <BackofficeCard {...cardInfo} key={index} />
          ))}
        </SimpleGrid>
      </Center>
    </>
  )
}

export default LayoutBackoffice
