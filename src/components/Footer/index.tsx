import { t } from '@lingui/macro'
import { useLingui } from '@lingui/react'
import { DiscordIcon, InstagramIcon, MediumIcon, TwitterIcon } from 'app/components/Icon'
import LanguageSwitch from 'app/components/LanguageSwitch'
import Typography from 'app/components/Typography'
import { Feature } from 'app/enums'
import { featureEnabled } from 'app/functions'
import { useActiveWeb3React } from 'app/services/web3'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import Container from '../Container'

const Footer = () => {
  const { chainId } = useActiveWeb3React()
  const { i18n } = useLingui()

  return (
    <div className="z-10 w-full">
      <Container maxWidth="7xl" className="px-6 pb-20 mx-auto">
        <div className="grid grid-cols-2 gap-10 pt-8 border-t md:grid-cols-3 lg:grid-cols-6 xs:px-6 border-dark-900">
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-start gap-2">
              <div className="">
                <Image src="https://raw.githubusercontent.com/Pattieswap/assets/main/logo.png" alt="Sushi logo" width="28px" height="28px" />
              </div>
              <Typography variant="h2" weight={700} className="tracking-[0.02em] scale-y-90 hover:text-high-emphesis">
                PattieSwap
              </Typography>
            </div>
            <Typography variant="xs" className="text-low-emphesis">
              {i18n._(t`Our community is building a comprehensive decentralized trading platform for the future of finance. Join
              us!`)}
            </Typography>
            <div className="flex items-center gap-4">
              <a href="https://twitter.com/pattieswap" target="_blank" rel="noreferrer">
                <TwitterIcon width={16} className="text-low-emphesis" />
              </a>
              <a href="https://instagram.com/instapattieswap" target="_blank" rel="noreferrer">
                <InstagramIcon width={16} className="text-low-emphesis" />
              </a>
              <a href="https://medium.com/pattieswap-org" target="_blank" rel="noreferrer">
                <MediumIcon width={16} className="text-low-emphesis" />
              </a>
              <a href="https://discord.gg/" target="_blank" rel="noreferrer">
                <DiscordIcon width={16} className="text-low-emphesis" />
              </a>
            </div>
          </div>
         
          <div className="flex flex-col gap-1 md:text-right lg:text-right">
            <Typography variant="xs" weight={700} className="mt-2.5 hover:text-high-emphesis">
              {i18n._(t`Help`)}
            </Typography>
            <a href="https://docs.pattieswap.finance" target="_blank" rel="noreferrer">
              <Typography variant="xs" className="text-low-emphesis hover:text-high-emphesis">
                {i18n._(t`What is Sushi?`)}
              </Typography>
            </a>
            <a href="https://discord.gg/NVPXN4e" target="_blank" rel="noreferrer">
              <Typography variant="xs" className="text-low-emphesis hover:text-high-emphesis">
                {i18n._(t`Ask on Discord`)}
              </Typography>
            </a>
            <a href="https://twitter.com/pattieswap" target="_blank" rel="noreferrer">
              <Typography variant="xs" className="text-low-emphesis hover:text-high-emphesis">
                {i18n._(t`Ask on Twitter`)}
              </Typography>
            </a>
            <a href="https://forum.pattieswap.finance" target="_blank" rel="noreferrer">
              <Typography variant="xs" className="text-low-emphesis hover:text-high-emphesis">
                {i18n._(t`Ask on Forum`)}
              </Typography>
            </a>
          </div>
          <div className="flex flex-col gap-1 text-right xs:text-right md:text-left lg:text-right">
            <Typography variant="xs" weight={700} className="mt-2.5 hover:text-high-emphesis">
              {i18n._(t`Developers`)}
            </Typography>
            <a href="https://docs.pattieswap.finance" target="_blank" rel="noreferrer">
              <Typography variant="xs" className="text-low-emphesis hover:text-high-emphesis">
                {i18n._(t`GitBook`)}
              </Typography>
            </a>
            <a href="https://github.com/pattieswap" target="_blank" rel="noreferrer">
              <Typography variant="xs" className="text-low-emphesis hover:text-high-emphesis">
                {i18n._(t`GitHub`)}
              </Typography>
            </a>
            <a href="https://dev.pattieswap.finance" target="_blank" rel="noreferrer">
              <Typography variant="xs" className="text-low-emphesis hover:text-high-emphesis">
                {i18n._(t`Development`)}
              </Typography>
            </a>
            <a href="https://docs.openmev.org" target="_blank" rel="noreferrer">
              <Typography variant="xs" className="text-low-emphesis hover:text-high-emphesis">
                {i18n._(t`SushiGuard`)}
              </Typography>
            </a>
          </div>
          <div className="flex flex-col gap-1 md:text-right lg:text-right">
            <Typography variant="xs" weight={700} className="mt-2.5 hover:text-high-emphesis">
              {i18n._(t`Governance`)}
            </Typography>
            <a href="https://forum.pattieswap.finance" target="_blank" rel="noreferrer">
              <Typography variant="xs" className="text-low-emphesis hover:text-high-emphesis">
                {i18n._(t`Forum & Proposals`)}
              </Typography>
            </a>
            <a href="https://snapshot.org/#/sushigov.eth" target="_blank" rel="noreferrer">
              <Typography variant="xs" className="text-low-emphesis hover:text-high-emphesis">
                {i18n._(t`Vote`)}
              </Typography>
            </a>
          </div>
         
          <div className="flex flex-col gap-1">
            <LanguageSwitch />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Footer
