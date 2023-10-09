import { g, auth, config } from '@grafbase/sdk'

const User = g.model('User',{

  name: g.string().length({min:2,max:20}),
  email:g.string().unique(),
  avatarUrl:g.url(),
  description:g.string(),
  githubUrl:g.url().optional(),
  linkedInUrl:g.url().optional(),
  projects: g.relation(() => Project).list().optional(),
}
  )

  const Project = g.model('Project',{
    title:g.string().length({min:3 }),
    description:g.string(),
    image:g.url().optional(),
    liveSiteUrl:g.url(),
    

    })
export default config({
  schema: g
  // Integrate Auth
  // https://grafbase.com/docs/auth
  // auth: {
  //   providers: [authProvider],
  //   rules: (rules) => {
  //     rules.private()
  //   }
  // }
})
