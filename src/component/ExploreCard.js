import React, { useContext } from "react";
import { Button, Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import StarIcon from "@material-ui/icons/Star";
import Slider from "react-slick";
import { AuthContext } from "src/context/Auth";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  cardContainer: {

    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    padding: theme.spacing(2, 1),
    margin: theme.spacing(1, 0),
    // backgroundColor: "red",
    boxShadow: theme.shadows[3],
    borderRadius: theme.shape.borderRadius,
    textAlign: "center",
    height:"500px",
    width:"180px",
  },
  cardContainer2:{
    backgroundColor:"white",
  },
  imgBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginBottom: theme.spacing(2),
  },
  imageContainer: {
    width: "315px",
    // maxWidth: "350px",
    height: "350px",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: theme.shape.borderRadius,
  },
  contentBox: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(1),
    alignItems: "center",
    textAlign: "center",
  },
  contentBox2: {
    width: "85%",
    display: "flex",
    justifyContent: "space-between",
    gap: theme.spacing(2),
  },
  traderName: {
    fontFamily: "Nunito Sans",
    fontSize: "18px",
    fontWeight: 400,
    color: "#4f4f4f",
    [theme.breakpoints.down("lg")]: {
      fontSize: "14px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "14px",
    },
  },
  priceBox: {
    display: "flex",
    justifyContent: "center",
    gap: theme.spacing(1),
  },
  discountPrice: {
    color: "#4d8c3f",
    fontFamily: "Nunito Sans",
    fontSize: "22px",
    fontWeight: 600,
    [theme.breakpoints.down("lg")]: {
      fontSize: "18px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "14px",
    },
  },
  actualPrice: {
    color: "#a7a7a7",
    fontFamily: "Nunito Sans",
    fontSize: "20px",
    fontWeight: 600,
    textDecoration: "line-through",
    [theme.breakpoints.down("lg")]: {
      fontSize: "16px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "12px",
    },
  },
  ratingBox: {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(0.5),
  },
  productDescription: {
    fontFamily: "Playfair Display",
    color: "#ecdace",
    fontSize: "20px",
    fontWeight: 700,
  },
  button: {
    width: "90%",
    marginTop: theme.spacing(1),
    backgroundColor: "#f6931f",
    borderRadius: "30px",
    padding: theme.spacing(1, 2),
    fontFamily: "Nunito Sans",
    fontSize: "16px",
    textTransform: "none",
    '&:hover': {
      backgroundColor: "#f6931f",
    },
  },
}));


const ExploreCard = () => {
  const classes = useStyles();
  
  const { dealData } = useContext(AuthContext);
  console.log("object",dealData)
  
  const addToCart = async (orderID) => {
    try {
      const response = await axios.post(`https://eleglam.vercel.app/api/v1/addOrder/${orderID}`);
      if (response.status === 200) {
        console.log("Item added to cart successfully:", response.data);
      } else {
        console.log("Failed to add item to cart:", response.statusText);
      }
    } catch (error) {
      console.error("Error adding item to cart:", error);
    }
  };
  
  // sliderBox: {
  //   display: "flex",
  //   flexDirection: "row",
  //   alignItems: "center",
  //   width: "100%",
  // },
  // var settings2 = {
  //   dots: false,
  //   infinite: true,
  //   arrows: true,
  //   // nextArrow: <SampleNextArrow />,
  //   // prevArrow: <SamplePrevArrow />,
  //   speed: 500,
  //   slidesToShow: 4,
  //   centerMode: false,
  //   autoplay: true,
  //   autoplaySpeed: 2000,
  //   root:{
  //     "& .slick-slider":{
  //       "& .slick-prev, .slick-next":{
  //         color:"orange"
  //       }
  //     },
  //   },
    
  //   responsive: [
  //     {
  //       breakpoint: 1050,
  //       settings: {
  //         slidesToShow: 2,
  //         // centerMode: true,
  //         // centerPadding: "30px",
  //       },
  //     },
  //     {
  //       breakpoint: 700,
  //       settings: {
  //         slidesToShow: 2,
  //         // centerMode: true,
  //         // centerPadding: "20px",
  //       },
  //     },
  //     {
  //       breakpoint: 400,
  //       settings: {
  //         slidesToShow: 1,
  //         // centerMode: true,
  //         // centerPadding: "10px",
  //       },
  //     },
  //   ],
  // }; 

  var settings2 = {
    dots: false,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 4,
    centerMode: false,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 725,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

      
  return (
    <Box>
        <Slider {...settings2} className={classes.sliderBox}>
        {dealData && dealData.map((deal, index) => (
          <Box key={index} className={classes.cardContainer}>
            <Box className={classes.cardContainer2}>
              <Box className={classes.imgBox}>
                <Box className={classes.imageContainer}>
                  <img src={deal.image} alt={deal.product} className={classes.image} />
                </Box>
              </Box>
              <Box className={classes.contentBox}>
                <Box className={classes.contentBox2}>
                  <Box className={classes.contentBox}>
                  <Typography className={classes.traderName}>
    {deal.product.length > 30 ? `${deal.product.slice(0, 30)}...` : deal.product}
  </Typography>

                    <Box className={classes.priceBox}>
                      <Typography className={classes.discountPrice}>₹{deal.price}</Typography>
                      <Typography className={classes.actualPrice}>{deal.originalPrice}</Typography>
                    </Box>
                  </Box>
                  <Box className={classes.contentBox}>
                    <Box className={classes.ratingBox}>
                      <Typography className={classes.discountPrice}>4.5</Typography>
                      <StarIcon style={{ color: "#ffb400" }} />
                    </Box>
                    <Typography className={classes.productDescription}>Free Delivery</Typography>
                  </Box>
                </Box>
                <Button
                  variant="contained"
                  startIcon={<ShoppingCartIcon />}
                  className={classes.button}
                  onClick={() => addToCart(deal.trader)}
                >
                  Add To Cart
                </Button>
              </Box>
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default ExploreCard;
