import Format from '../layout/format';
import Section1 from '../components/section1';
import Section2 from '../components/section2';
import Section3 from '../components/section3';
import Section4 from '../components/section4';
import QueryStr from 'query-string';
export default function Home({data}) {
  return (
    <>
 
    <Format blog={data}>
        <Section1 blog={data}></Section1>
        <Section2 blog={data}></Section2>
        <Section3 blog={data}></Section3>
        <Section4 blog={data}></Section4>
    </Format>
    </>
  )
}


export async function getServerSideProps(props){
  var query=QueryStr.stringify(props.query);
  const res = await fetch(`https://blog-next-app-khaki.vercel.app/api/getall?${query}`)
  const data = await res.json()

  return{props:{data}}
}

