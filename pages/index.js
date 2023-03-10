import Head from 'next/head'
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* <img src='/images/profile.png' alt='mockimg' /> */}
        <Image src='/images/profile.png' width={140} height={140}></Image>
        <h1 className={styles.title}>
          React this Post {' '}<Link href="/posts/first-post">첫글</Link>
        </h1>
        <h1 className={styles.title}>
          React this Post {' '}<a href="/posts/first-post">첫글 a태그</a>
        </h1>

        <div> Link 태그를 사용한다면 추가적인 부분만 가져오지만 a 태그는 그냥 문서를 다 가져옴
          Client Side Naviage js 상에서만 page 이동
        </div>
        <div>
          Next.js 는 Automatic code splitting 제공
          특정 페이지에 접근 할 때 해당 페이지를 그릴 때 필요한 chunk 만 로드한다
          페이지 이동하면 그떄 필요한 chunk 추가 로드한다
        </div>
        <div>
          Prefetching
          페이지에 Link 태그가 노출되어 있으면 누를수 있겠다고 판단하여 미리 가져오는 Next 기능
        </div>
      </main>

      <h1 className={styles.title}>
        React this Post {' '}<Link href="/posts/second-post">두번째 글</Link>
      </h1>
      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel" className={styles.logo} />
        </a>
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}