import Header from '../components/header'
import ExtLink from '../components/ext-link'

import sharedStyles from '../styles/shared.module.css'
import contactStyles from '../styles/contact.module.css'

import GitHub from '../components/svgs/github'
import Twitter from '../components/svgs/twitter'
import LinkedIn from '../components/svgs/linkedin'

const contacts = [
  {
    Comp: Twitter,
    alt: 'twitter icon',
    link: 'https://twitter.com/off2white',
  },
  {
    Comp: GitHub,
    alt: 'github icon',
    link: 'https://github.com/offwhiite',
  },
  {
    Comp: LinkedIn,
    alt: 'linkedin icon',
    link: 'https://www.linkedin.com/in/jj-kasper-0b5392166/',
  },
]

export default () => (
  <>
    <Header titlePre="Profile" />
    <div className={contactStyles.container}>
      <div className={contactStyles.profileImage}>
        <img
          src="/profile.png"
          alt="avatar with yuki.anzai"
          height="180px"
          width="180px"
        />
      </div>

      <div className={contactStyles.testContainer}>
        <div className={contactStyles.profileContainer}>
          <div className={contactStyles.profileUserName}>yuki.anzai</div>
          <div className={contactStyles.profileUserSetting}>
            エンジニア＠育児中(2歳)。
            主にAndroidアプリの開発してます。最近はTypeScriptの勉強中です。
            <p></p>
            好きなもの:脱出ゲーム、ボードゲーム、豆乳、ケバブ、タピオカ
          </div>

          <div className={contactStyles.links}>
            {contacts.map(({ Comp, link, alt }) => {
              return (
                <ExtLink key={link} href={link} aria-label={alt}>
                  <Comp height={32} />
                </ExtLink>
              )
            })}
          </div>
        </div>
      </div>
    </div>
    <div className={contactStyles.container}>
      <div className={contactStyles.carrierContainer}>
        <h1 className={contactStyles.title}>なにしてきてるひとなの。</h1>
        <table className={contactStyles.table}>
          <tr>
            <th>期間</th>
            <th>やったこと</th>
          </tr>
          <tr>
            <td>2020/4~</td>
            <td>
              <p>
                <h4>
                  株式会社MobilityTechnologies <br /> Software Engineer{' '}
                </h4>
                タクシー配車サービスの車載器アプリ開発(Android)とその推進
              </p>
            </td>
          </tr>
          <tr>
            <td>2019/2~2020/3</td>
            <td>
              <p>
                <h4>
                  株式会社ディー・エヌ・エー <br /> Software Engineer{' '}
                </h4>
                タクシー配車サービスの車載器アプリ開発(Android)
                <ul>
                  <li>Flux + Repository パターンのアーキテクチャ設計&開発</li>
                  <li>モブプロ による自動テスト実装推進</li>
                  <li>Scrum導入 + スクラムマスター兼務</li>
                </ul>
                など
              </p>
            </td>
          </tr>
          <tr>
            <td>2017/4~2019/1</td>
            <td>
              <p>
                <h4>
                  株式会社DNPデジタルソリューションズ <br /> Project Maneger
                </h4>
                金融系アプリ開発プロジェクトマネージャー&iOS / Android
                アプリ開発
                <ul>
                  <li>要件定義・顧客折衝・プロジェクト管理・品質管理</li>
                  <li>
                    MVVM + CleanArchitectureへのリアーキテクチャ設計 + 開発
                  </li>
                  <li>BDDの推進</li>
                </ul>
                など
              </p>
            </td>
          </tr>
          <tr>
            <td>2013/4~2017/3</td>
            <td>
              <p>
                <h4>
                  株式会社DNP情報システム <br /> Software Engineer
                </h4>
                Android アプリ開発
                <ul>
                  <li>電子書籍アプリ開発</li>
                  <li>書店オムニチャネルアプリ開発</li>
                  <li>大型ショッピング店舗利用アプリ開発</li>
                </ul>
                など
              </p>
            </td>
          </tr>
        </table>
      </div>
    </div>
  </>
)
