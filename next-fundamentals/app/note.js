// next 13 has 3 major style onto 
// data Fetching:

// 1. SSR(Server Side Rendering)
// 2. SSG(Static Site Generation)
// 3. ISR(Incremental Static Generation)


// You can't have page.js and route.js on same level . route.js is used esp of creating an APis

// Two way of imporving SEOs
// 1.Static MetaData 2. Dynamic Metadata

export const metadata = {
    title: 'Home',
}
// or
export async function generatemetadata({ params, searchParams }) {
    const product = await getProduct(params.id);
    return { title: product.title }
}

// Output:
//<head> <title> Unique Product </title> </head>