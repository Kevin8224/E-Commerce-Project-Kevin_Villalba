###### Coderhouse React.js course.
#### App Link: https://sabrium.netlify.app
---
## Libraries and extras
| Name | Version | Link |
| ------ | ------ | ------ |
| React.js | v18.1.0 | https://reactjs.org/ |
| React Router | v6.3.0 | https://reactrouter.com/ |
| Firebase | v9.8.4 | https://firebase.google.com/ |
| Bootstrap | v5.1.3 | https://getbootstrap.com/ |
| React FontAwesome | v1.7.1 | https://fontawesome.com/ |

# Introduction
##### Project by Kevin villalba.
 This web application ([Sabrium](https://sabrium.netlify.app)) is built entirely with [React.js](https://reactjs.org), it is a fast food e-commerce app with simple styles and structure, based on a personal idea. The app uses Firebase to storage products, user data, and purchase details. 

# Application info
The application consists of a routing with 5 routes
- [Home](https://sabrium.netlify.app): where all products are displayed.
- [Category](http://sabrium.netlify.app/categoria/pizzas): this shows the products filtered by category.
- [Detail](https://sabrium.netlify.app/detalle/1xtNhb9ZDdPbeSBBuGb0): this shows individual product detail.
- [Cart](https://sabrium.netlify.app/carrito): Shows the products that the user is going to buy.
- Verification: This is to request the user data for the purchase. And also after requesting them, show the details of the purchase.

The hooks I am using in the app:
- [useState](https://es.reactjs.org/docs/hooks-reference.html#usestate)
- [useEffect](https://es.reactjs.org/docs/hooks-reference.html#useeffect) 
- [useContext](https://es.reactjs.org/docs/hooks-reference.html#usecontext)
  Extra
- [useParams](https://reactrouter.com/docs/en/v6/hooks/use-params) (from react-router)
