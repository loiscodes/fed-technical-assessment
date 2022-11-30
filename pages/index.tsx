import { useEffect, useState } from 'react';
import type { NextPage } from "next";
import Head from "next/head";
import ProductDetails from "components/ProductDetails";
import ProductVariations from "components/ProductVariations";

const title = "RTG Frontend technical assessment";

const PDP: NextPage = () => {
  const [res, setRes] = useState(Object);
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(true);
  const response = async () => {
    try{
      const fet = await fetch('/api/product')
      const json = await fet.json();
      if(json.title && json.primary_image && json.sku){
        setRes(json);
      }else{
        setErr(json.errorMessage)
      }
      setLoading(false)
    }catch(error){
      setErr(error.errorMessage)
    }
  };
  useEffect(() =>{
    response();
  },[])
  
  return (
  <div className="container">
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className="main">
      <h1>{title}</h1>
      { loading ? 
      <section>Loading... </section> :
      err !== "" ?
      <section>
        {err}
      </section>
      :
      <section className="product">
        <ProductDetails title={res?.title} primary_image={res?.primary_image} sku={res?.sku} />
        <ProductVariations size={res?.variations?.size} finish={res?.variations?.finish} />
      </section> }
    </main>
  </div>
)};

export default PDP;
