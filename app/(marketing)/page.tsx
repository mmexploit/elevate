'use client'

import {
  Box,
  ButtonGroup,
  Container,
  Flex,
  HStack,
  Heading,
  Icon,
  IconButton,
  Stack,
  Tag,
  Text,
  VStack,
  Wrap,
  useClipboard,
} from '@chakra-ui/react'
import { Br, Link } from '@saas-ui/react'
import type { Metadata, NextPage } from 'next'
import Image from 'next/image'
import {
  FiArrowRight,
  FiBox,
  FiCheck,
  FiCode,
  FiCopy,
  FiFlag,
  FiGrid,
  FiLock,
  FiSearch,
  FiSliders,
  FiSmile,
  FiTerminal,
  FiThumbsUp,
  FiToggleLeft,
  FiTrendingUp,
  FiUserPlus,
} from 'react-icons/fi'

import * as React from 'react'

import { ButtonLink } from '#components/button-link/button-link'
import { Faq } from '#components/faq'
import { Features } from '#components/features'
import { BackgroundGradient } from '#components/gradients/background-gradient'
import { Hero } from '#components/hero'
import {
  Highlights,
  HighlightsItem,
  HighlightsTestimonialItem,
} from '#components/highlights'
import { ChakraLogo, NextjsLogo } from '#components/logos'
import { FallInPlace } from '#components/motion/fall-in-place'
import { Pricing } from '#components/pricing/pricing'
import { Testimonial, Testimonials } from '#components/testimonials'
import { Em } from '#components/typography'
import faq from '#data/faq'
import pricing from '#data/pricing'
import testimonials from '#data/testimonials'

export const meta: Metadata = {
  title: 'Saas UI Landingspage',
  description: 'Free SaaS landingspage starter kit',
}

const Home: NextPage = () => {
  return (
    <Box>
      <HeroSection />

      <HighlightsSection />

      <FeaturesSection />

      {/* <TestimonialsSection /> */}

      {/* <PricingSection /> */}

      <FaqSection />
    </Box>
  )
}

const HeroSection: React.FC = () => {
  return (
    <Box position="relative" overflow="hidden">
      <BackgroundGradient height="100%" zIndex="-1" />
      <Container maxW="container.xl" pt={{ base: 40, lg: 60 }} pb="40">
        <Stack direction={{ base: 'column', lg: 'row' }} alignItems="center">
          <Hero
            id="home"
            justifyContent="flex-start"
            px="0"
            title={
              <FallInPlace>
                Elevate your business
                <Br /> with our solutions
              </FallInPlace>
            }
            description={
              <FallInPlace delay={0.4} fontWeight="medium">
                Innovative tech solutions React component library
                <Br /> tailored to transform, streamline, and elevate your{' '}
                <Br /> business to new <Em>heights</Em>.
              </FallInPlace>
            }
          >
            <FallInPlace delay={0.8}>
              <ButtonGroup spacing={4} alignItems="center" className="mt-8">
                <ButtonLink colorScheme="primary" size="lg" href="/signup">
                  Get started
                </ButtonLink>
                <ButtonLink
                  size="lg"
                  href="https://t.me/+251988745721"
                  variant="outline"
                  rightIcon={
                    <Icon
                      as={FiArrowRight}
                      sx={{
                        transitionProperty: 'common',
                        transitionDuration: 'normal',
                        '.chakra-button:hover &': {
                          transform: 'translate(5px)',
                        },
                      }}
                    />
                  }
                >
                  Schedule a demo
                </ButtonLink>
              </ButtonGroup>
            </FallInPlace>
          </Hero>
          <Box
            height="600px"
            position="absolute"
            display={{ base: 'none', lg: 'block' }}
            left={{ lg: '60%', xl: '55%' }}
            width="80vw"
            maxW="1100px"
            margin="0 auto"
          >
            <FallInPlace delay={1}>
              <Box overflow="hidden" height="100%">
                <Image
                  src="/static/screenshots/hero.png"
                  width={1200}
                  height={762}
                  alt="Screenshot of a erp dashboard"
                  quality="75"
                  priority
                />
              </Box>
            </FallInPlace>
          </Box>
        </Stack>
      </Container>

      <Features
        id="benefits"
        columns={[1, 2, 4]}
        iconSize={4}
        innerWidth="container.xl"
        pt="20"
        features={[
          {
            title: 'Expertise You Can Trust',
            icon: FiSmile,
            description:
              'Our team of seasoned professionals brings years of experience across industries.',
            iconPosition: 'left',
            delay: 0.6,
          },
          {
            title: 'Innovative Approach',
            icon: FiSliders,
            description:
              'We stay ahead of the tech curve to bring you the latest innovations.',
            iconPosition: 'left',
            delay: 0.8,
          },
          {
            title: 'Customer-Centric',
            icon: FiGrid,
            description:
              'Your success is our priority. We partner with you to achieve your goals.',
            iconPosition: 'left',
            delay: 1,
          },
          {
            title: 'End-to-End Solutions',
            icon: FiThumbsUp,
            description:
              'From consultation to implementation and support, we’ve got you covered.',
            iconPosition: 'left',
            delay: 1.1,
          },
        ]}
        reveal={FallInPlace}
      />
    </Box>
  )
}

const HighlightsSection = () => {
  const { value, onCopy, hasCopied } = useClipboard('yarn add @saas-ui/react')

  return (
    <Highlights>
      <HighlightsItem
        colSpan={[1, null, 2]}
        title="Empowering Your Business with Smarter Technology"
      >
        <VStack alignItems="flex-start" spacing="8">
          <Text color="muted" fontSize="xl">
            At Elevate Tech Solutions, we bridge the gap between your business
            goals and cutting-edge technology. Our expert team delivers
            customized solutions to modernize your operations, safeguard your
            data, and unlock new growth opportunities. Whether you're a startup
            or an established enterprise, we’re here to elevate your business
            with solutions that are as dynamic as your ambitions.
          </Text>
        </VStack>
      </HighlightsItem>
      <HighlightsItem title="Our Mission">
        <Text color="muted" fontSize="lg">
          To elevate businesses by delivering robust, innovative, and customized
          technology solutions that meet today’s challenges and prepare for
          tomorrow’s opportunities.
        </Text>
      </HighlightsItem>
      {/* <HighlightsTestimonialItem
        name="Renata Alink"
        description="Founder"
        avatar="/static/images/avatar.jpg"
        gradient={['pink.200', 'purple.500']}
      >
        “Saas UI helped us set up a beautiful modern UI in no time. It saved us
        hundreds of hours in development time and allowed us to focus on
        business logic for our specific use-case from the start.”
      </HighlightsTestimonialItem> */}
      <HighlightsItem
        colSpan={[1, null, 3]}
        title="Start your next idea two steps ahead"
      >
        <Text color="muted" fontSize="lg">
          We took care of all your basic business needs, so you can have
          functionality that makes your product unique.
        </Text>
        <Wrap mt="8">
          {[
            'ERP',
            'Landing Pages',
            'Website Development',
            'Mobile App Development',
            'UI/UX Design',
            'Graphics Design',
            'documentation',
            'onboarding',
            'storybooks',
            'theming',
            'upselling',
            'unit testing',
            'feature flags',
            'responsiveness',
          ].map((value) => (
            <Tag
              key={value}
              variant="subtle"
              colorScheme="purple"
              rounded="full"
              px="3"
            >
              {value}
            </Tag>
          ))}
        </Wrap>
      </HighlightsItem>
    </Highlights>
  )
}

const FeaturesSection = () => {
  return (
    <Features
      id="features"
      title={
        <Heading
          lineHeight="short"
          fontSize={['2xl', null, '4xl']}
          textAlign="left"
          as="p"
        >
          What We Offer
        </Heading>
      }
      description={
        <>
          Elevate Tech Solutions Provides Varied Services to Meet Your Business
          Needs
        </>
      }
      align="left"
      columns={[1, 2, 3]}
      iconSize={4}
      features={[
        {
          title: 'Custom Software Development',
          icon: FiBox,
          description:
            'Tailored software solutions designed to meet your unique business needs and give you a competitive edge.',
          variant: 'inline',
        },
        {
          title: 'Cloud Services',
          icon: FiLock,
          description:
            'Secure, scalable, and efficient cloud solutions to enhance your business agility.',
          variant: 'inline',
        },
        {
          title: 'IT Support & Consulting',
          icon: FiSearch,
          description:
            'Round-the-clock support and expert consulting to keep your operations running smoothly..',
          variant: 'inline',
        },
        {
          title: 'Data Analytics & Insights',
          icon: FiUserPlus,
          description:
            'Transform your data into actionable insights that drive smarter decisions.',
          variant: 'inline',
        },
        {
          title: 'Cybersecurity',
          icon: FiFlag,
          description:
            'Protect your business from digital threats with robust and proactive cybersecurity measures.',
          variant: 'inline',
        },
        {
          title: 'Automation & Integration',
          icon: FiTrendingUp,
          description:
            'Streamline your processes and boost efficiency with seamless automation and system integration.',
          variant: 'inline',
        },
        // {
        //   title: 'Themes.',
        //   icon: FiToggleLeft,
        //   description:
        //     'Includes multiple themes with darkmode support, always have the perfect starting point for your next project.',
        //   variant: 'inline',
        // },
        // {
        //   title: 'Generators.',
        //   icon: FiTerminal,
        //   description:
        //     'Extend your design system while maintaininig code quality and consistency with built-in generators.',
        //   variant: 'inline',
        // },
        // {
        //   title: 'Monorepo.',
        //   icon: FiCode,
        //   description: (
        //     <>
        //       All code is available as packages in a high-performance{' '}
        //       <Link href="https://turborepo.com">Turborepo</Link>, you have full
        //       control to modify and adjust it to your workflow.
        //     </>
        //   ),
        //   variant: 'inline',
        // },
      ]}
    />
  )
}

const TestimonialsSection = () => {
  const columns = React.useMemo(() => {
    return testimonials.items.reduce<Array<typeof testimonials.items>>(
      (columns, t, i) => {
        columns[i % 3].push(t)

        return columns
      },
      [[], [], []],
    )
  }, [])

  return (
    <Testimonials
      title={testimonials.title}
      columns={[1, 2, 3]}
      innerWidth="container.xl"
    >
      <>
        {columns.map((column, i) => (
          <Stack key={i} spacing="8">
            {column.map((t, i) => (
              <Testimonial key={i} {...t} />
            ))}
          </Stack>
        ))}
      </>
    </Testimonials>
  )
}

const PricingSection = () => {
  return (
    <Pricing {...pricing}>
      <Text p="8" textAlign="center" color="muted">
        VAT may be applicable depending on your location.
      </Text>
    </Pricing>
  )
}

const FaqSection = () => {
  return <Faq {...faq} />
}

export default Home
