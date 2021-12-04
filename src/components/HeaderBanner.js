
import { AppBar as AB, Toolbar as TB} from "@material-ui/core";
import React from "react";
import styled from 'styled-components';

function HeaderBanner() {
  return (
    <header>
      <AB>
        <TB>Healthy Food Recipes</TB>
      </AB>
    </header>
  );
}

export default HeaderBanner;