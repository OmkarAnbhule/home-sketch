import { styled, Slider, SliderThumb } from "@mui/material";

export const AirbnbSlider = styled(Slider)(({ theme }) => ({
  color: 'var(--slider-thumb-color)',
  height: 3,
  padding: '14px 0',
  '& .MuiSlider-thumb': {
    height: 13,
    width: 13,
    backgroundColor: 'var(--slider-thumb-color)',
    border: '1px solid currentColor',
    '&:hover': {
      boxShadow: '0 0 0 8px rgba(58, 133, 137, 0.16)',
    },
    '& .airbnb-bar': {
      height: 9,
      width: 1,
      backgroundColor: 'var(--slider-thumb-color)',
      marginLeft: 1,
      marginRight: 1,
    },
  },
  '& .MuiSlider-track': {
    height: 3,
  },
  '& .MuiSlider-rail': {
    color: 'var(--slider-rail-color)',
    opacity: 1,
    height: 3,
  },
}));

export const AirbnbThumbComponent = (props) => {
  const { children, ...other } = props;
  return (
    <SliderThumb {...other}>
      {children}
    </SliderThumb>
  );
}