import React, {Component} from 'react'
import { Grid, Typography } from '@material-ui/core'
import { getProducts } from '../components/api';
import Product from './Products'

class Gallery extends Component {


    constructor(props) {
        super(props)
        // this.getProducts()
        console.log(props.products)
        this.state = {
            product : props.products,
            restoUid: ''
        }
    }

    componentDidMount() {
        let restoUid = localStorage.getItem('restoUid');
        this.setState({restoUid: restoUid})
    }

    getProducts = () => {
        console.log('this.state.restoUid inside gallery', this.state.restoUid)
        getProducts(this.state.restoUid)
        .then(response => {
            this.setState({product: response})
            // console.log('inside getProducts', response)
            // this.setState({products: response.productName})
        })
        .catch((error) => {
            console.log("Error occured while fetching data")
            console.log(error)
        })
    }

    // onSearchInputChange = (event) => {
    //     if (event.target.value) {
    //         this.setState({searchString: event.target.value})
    //     } else {
    //         this.setState({searchString: ''})
    //     }
    //     this.getCourses()
    // }

    render() {
        return (
            <div>
                <div class="headingtext2">
                <Typography gutterBottom variant="h4" component="h3">
                            Product Gallery
                </Typography>
                </div>
                {this.state.product ? (
                    <div>
                        {/* <TextField style={{padding: 24}}
                            id="searchInput"
                            placeholder="Search for Courses"
                            margin="normal"
                            onChange={this.onSearchInputChange} /> */}
                        <Grid container spacing={20} style={{padding: 24}}>


                            { this.state.product.map(currentProduct => (
            
                                <Grid item xs={10} sm={6} lg={4} xl={2}>
                                    <Product product={currentProduct} />
                                </Grid>
                            ))}
                        </Grid>
                    </div>
                ) : "No products found" }
            </div>
        )
    }
}

export default Gallery;