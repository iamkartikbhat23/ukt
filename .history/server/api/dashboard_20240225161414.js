export default defineEventHandler(async (event) => {
    console.log("here") ;
    // let url = process.env.API_URL+'/dashboard' ;
    const config = useRuntimeConfig() ;
    // const { data } = await $fetch('')
    // return { message: config.apiURL } 

    // console.log("here") ;
    // const config = useRuntimeConfig() ;
    let url = config.apiURL+'/dashboard' ;
    // const { data } = await $fetch(url,{
    //     headers: {
	//     	"Accept": "application/json"
	//   	},
    // }) ;
    return { data: url } 
})