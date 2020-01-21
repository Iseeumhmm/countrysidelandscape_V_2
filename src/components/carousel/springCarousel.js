import React from "react";
import { animated } from "react-spring";
import { Transition } from 'react-spring/renderprops'
import createSrcSet from '../helperFuncrtions/createSrcSets'
import styled from 'styled-components'

const SliderContainer = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 50% 50%;
`;

const Container = styled.div`
    height: 400px;
    position: relative;
    width: 100%;
    cursor: pointer;
    & > div {
    will-change: transform, opacity;
    position: absolute;
    width: 100%;
    height: 100%;
    }
`

const getSlide = (preLoadedImages) => {
    return (
        <SliderContainer 
        src={preLoadedImages[0]}
        srcSet={preLoadedImages[1]}
        sizes="100vw"
        alt="Pool"
        >
        </SliderContainer>
    )
}
class Carousel extends React.Component {

    state = {
        index: 0,
        length: 1,
        preLoadedImages: null
    };
    toggle = e =>
    this.setState(state => ({
        index: state.index === state.length - 1 ? 0 : state.index + 1
    }));

    componentDidMount() {

        const { imageData: { pools: images } } = this.props
        console.log('this.props: ', this.props)
        let links = createSrcSet(images)
        var head = document.getElementsByTagName('head')[0];
        links.forEach( each => {
            var link = document.createElement('link');
            link.rel = 'preload'
            link.as = 'image'
            link.href = each[0]
            link.imageSrcset = each[1]
            link.imageSizes = "100vw"
            head.appendChild(link);
        })
        
        this.setState({
            length: images.length,
            preLoadedImages: links
        })
    }

    render() {
        const { index } = this.state;
        const { preLoadedImages } = this.state
        return (
            <div style={{ backgroundColor: `${this.props.backgroundColor}`}}>
            <Container onClick={this.toggle}>
                <Transition
                native
                reset
                unique
                items={index}
                from={{ opacity: 0, transform: "translate3d(100%, 0 ,0)" }}
                enter={{ opacity: 1, transform: "translate3d(0%, 0, 0)" }}
                leave={{ opacity: 0, transform: "translate3d(-50%, 0, 0)" }}
                >
                {index => style => (
                    <animated.div style={{ ...style }}>
                    {getSlide(preLoadedImages[index])}
                    </animated.div>
                )}
                </Transition>
            </Container>
            </div>
        );
    }
}

export default Carousel
