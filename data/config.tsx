import { Button } from '@chakra-ui/react'
import { Link } from '@saas-ui/react'
import { NextSeoProps } from 'next-seo'
import { FaGithub, FaTelegram, FaTwitter } from 'react-icons/fa'
import { FiCheck } from 'react-icons/fi'
import { Logo } from './logo'

const siteConfig = {
  logo: Logo,
  seo: {
    title: 'Elevate Tech Solutions',
    description: 'Elevate Tech Solutions | Elevate your business with our solutions',
  } as NextSeoProps,
  termsUrl: '#',
  privacyUrl: '#',
  header: {
    links: [
      {
        id: 'features',
        label: 'Features',
      },
      {
        id: 'pricing',
        label: 'Pricing',
      },
      {
        id: 'faq',
        label: 'FAQ',
      },
      
    ],
  },
  footer: {
    copyright: (
      <>
        Copyright &copy; {new Date().getFullYear()}{' '}
      </>
    ),
    links: [
      {
        href: 'mailto:mubarekendrem@gmail.com',
        label: 'Contact',
      },
      {
        href: 'https://t.me/+251988745721',
        label: <FaTelegram size="14" />,
      },
      // {
      //   href: 'https://github.com/saas-js/saas-ui',
      //   label: <FaGithub size="14" />,
      // },
    ],
  },
  signup: {
    title: 'Start building with Saas UI',
    features: [
      {
        icon: FiCheck,
        title: 'Accessible',
        description: 'All components strictly follow WAI-ARIA standards.',
      },
      {
        icon: FiCheck,
        title: 'Themable',
        description:
          'Fully customize all components to your brand with theme support and style props.',
      },
      {
        icon: FiCheck,
        title: 'Composable',
        description:
          'Compose components to fit your needs and mix them together to create new ones.',
      },
      {
        icon: FiCheck,
        title: 'Productive',
        description:
          'Designed to reduce boilerplate and fully typed, build your product at speed.',
      },
    ],
  },
}

export default siteConfig
