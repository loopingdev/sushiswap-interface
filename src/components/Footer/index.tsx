import { t } from '@lingui/macro'
import { useLingui } from '@lingui/react'
import { DiscordIcon, RedditIcon, TelegramIcon, TwitterIcon } from 'app/components/Icon'
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
              <a href="https://twitter.com/Pattieswap" target="_blank" rel="noreferrer">
                <TwitterIcon width={16} className="text-low-emphesis" />
              </a>
              <a href="https://t.me/PattieswapChat" target="_blank" rel="noreferrer">
                <TelegramIcon width={16} className="text-low-emphesis" />
              </a>
              <a href="https://www.reddit.com/r/Pattieswap/?rdt=44027" target="_blank" rel="noreferrer">
                <RedditIcon width={16} className="text-low-emphesis" />
              </a>
              <a href="https://www.youtube.com/@pattieswap4510" target="_blank" rel="noreferrer">
                <DiscordIcon width={16} className="text-low-emphesis" />
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-1 text-right">
            <Typography variant="xs" weight={700} className="mt-2.5 hover:text-high-emphesis">
              {i18n._(t`Products`)}
            </Typography>
            <Link href={featureEnabled(Feature.TRIDENT, chainId) ? '' : ''} passHref={true}>
              <Typography variant="xs" className="text-low-emphesis hover:text-high-emphesis">
                {i18n._(t`Liquidity Pools`)}
              </Typography>
            </Link>
            <Link href="https://pattiecity.com" passHref={true}>
              <Typography variant="xs" className="text-low-emphesis hover:text-high-emphesis">
                {i18n._(t`Pattie city`)}
              </Typography>
            </Link>
            <Link href="/miso" passHref={true}>
              <Typography variant="xs" className="text-low-emphesis hover:text-high-emphesis">
                {i18n._(t`PattiePad`)}
              </Typography>
            </Link>
            <a href="" target="_blank" rel="noreferrer">
              <Typography variant="xs" className="text-low-emphesis hover:text-high-emphesis">
                {i18n._(t`PattieSwap`)}
              </Typography>
            </a>
            <Link href="" passHref={true}>
              <Typography variant="xs" className="text-low-emphesis hover:text-high-emphesis">
                {i18n._(t`Tools`)}
              </Typography>
            </Link>
          </div>
          <div className="flex flex-col gap-1 md:text-right lg:text-right">
            <Typography variant="xs" weight={700} className="mt-2.5 hover:text-high-emphesis">
              {i18n._(t`Help`)}
            </Typography>
            <a href="https://pattieswap.finance" target="_blank" rel="noreferrer">
              <Typography variant="xs" className="text-low-emphesis hover:text-high-emphesis">
                {i18n._(t`What is Sushi?`)}
              </Typography>
            </a>
            <a href="https://t.me/Pattiswapchat" target="_blank" rel="noreferrer">
              <Typography variant="xs" className="text-low-emphesis hover:text-high-emphesis">
                {i18n._(t`Ask on Telegram`)}
              </Typography>
            </a>
            <a href="https://twitter.com/pattieswap" target="_blank" rel="noreferrer">
              <Typography variant="xs" className="text-low-emphesis hover:text-high-emphesis">
                {i18n._(t`Ask on Twitter`)}
              </Typography>
            </a>
            <a href="https://t.me/Pattiswapchat" target="_blank" rel="noreferrer">
              <Typography variant="xs" className="text-low-emphesis hover:text-high-emphesis">
                {i18n._(t`Ask on Forum`)}
              </Typography>
            </a>
          </div>
          <div className="flex flex-col gap-1 text-right xs:text-right md:text-left lg:text-right">
            <Typography variant="xs" weight={700} className="mt-2.5 hover:text-high-emphesis">
              {i18n._(t`Developers`)}
            </Typography>
            <a href="https://pattieswap.finance" target="_blank" rel="noreferrer">
              <Typography variant="xs" className="text-low-emphesis hover:text-high-emphesis">
                {i18n._(t`GitBook`)}
              </Typography>
            </a>
            <a href="https://github.com/pattieswap" target="_blank" rel="noreferrer">
              <Typography variant="xs" className="text-low-emphesis hover:text-high-emphesis">
                {i18n._(t`GitHub`)}
              </Typography>
            </a>
            <a href="https://pattieswap.finance" target="_blank" rel="noreferrer">
              <Typography variant="xs" className="text-low-emphesis hover:text-high-emphesis">
                {i18n._(t`Development`)}
              </Typography>
            </a>
            <a href="https://pattieswap.finance" target="_blank" rel="noreferrer">
              <Typography variant="xs" className="text-low-emphesis hover:text-high-emphesis">
                {i18n._(t`PattieDocs`)}
              </Typography>
            </a>
          </div>
          <div className="flex flex-col gap-1 md:text-right lg:text-right">
            <Typography variant="xs" weight={700} className="mt-2.5 hover:text-high-emphesis">
              {i18n._(t`Governance`)}
            </Typography>
            <a href="https://t.me/PattieChat" target="_blank" rel="noreferrer">
              <Typography variant="xs" className="text-low-emphesis hover:text-high-emphesis">
                {i18n._(t`Forum & Proposals`)}
              </Typography>
            </a>
            <a href="https://snapshot.org/#/pattieswap.eth" target="_blank" rel="noreferrer">
              <Typography variant="xs" className="text-low-emphesis hover:text-high-emphesis">
                {i18n._(t`Vote`)}
              </Typography>
            </a>
          </div>
          <div className="flex flex-col gap-1 text-right">
            <Typography variant="xs" weight={700} className="mt-2.5 hover:text-high-emphesis">
              {i18n._(t`Protocol`)}
            </Typography>
            <a href="https://t.me/PattieChat" target="_blank" rel="noreferrer">
              <Typography variant="xs" className="text-low-emphesis hover:text-high-emphesis">
                {i18n._(t`Apply for Listing`)}
              </Typography>
            </a>
            <a
              href=""
              target="_blank"
              rel="noreferrer"
            >
              <Typography variant="xs" className="text-low-emphesis hover:text-high-emphesis">
                {i18n._(t``)}
              </Typography>
            </a>

            <Link href="" passHref={true}>
              <Typography variant="xs" className="text-low-emphesis hover:text-high-emphesis">
                {i18n._(t``)}
              </Typography>
            </Link>
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
