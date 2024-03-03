export default defineEventHandler(async (event) => {
    console.log("here") ;
    const config = useRuntimeConfig() ;
    let url = process.env.API_URL+'/dashboard' ;
    const { data } = await $fetch(,{
        'accept':'application/json'
    })
    return { data: data } 
})