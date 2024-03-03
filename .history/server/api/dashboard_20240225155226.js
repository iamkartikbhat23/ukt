export default defineEventHandler(async (event) => {
    console.log("here") ;
    let url = process.env.API_URL+'/dashboard' ;
    const config = useRuntimeConfig() ;
    const { data } = await $fetch(config.a,{
        'accept':'application/json'
    })
    return { data: data } 
})