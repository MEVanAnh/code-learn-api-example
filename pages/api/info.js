// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function helloAPI(req, res) {
  res.status(200).json({
    firstname:'Kiki'
    lastname:'Bin'
    dob:'09/08/2011'
    gender:'Boy'
  })

}
