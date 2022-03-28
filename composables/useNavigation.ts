export const useNavigation = () => {
  const navigation = [
    { slug: "/", title: "Accueil" },
    { slug: "/articles", title: "Articles" },
    { slug: "/about", title: "About" },
  ]

  const onClick = (slug: string) => {
    console.log(slug);
  }

  return {
    navigation,
    onClick,
  }
}