import Link from 'next/link'
import Header from '../components/header'
import ExtLink from '../components/ext-link'
import Features from '../components/features'
import GitHub from '../components/svgs/github'
import sharedStyles from '../styles/shared.module.css'
import * as fs from 'fs'

export default () => (
  <>
    <Header titlePre="Home" />
    <div className={sharedStyles.layout}>
      <h1>サイトタイトル</h1>

      <div className="explanation">
        <p>- プロフィール・経歴 - 読了メモ・読了後のTODO/感想 - 技術メモ</p>
      </div>
    </div>
  </>
)
