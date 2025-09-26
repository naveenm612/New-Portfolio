// Updated PageBack.tsx
import React from "react";
import {
  Box,
  Paper,
  Typography,
  Link,
  Breadcrumbs,
  Stack,
} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Link as RouterLink } from "react-router-dom";
import PropTypes from "prop-types";
import "./Styles.css";

interface NavigationItem {
  label: string;
  to: string;
  onClick?: () => void;
}

interface PageBackProps {
  navigationData: NavigationItem[];
}

const PageBack: React.FC<PageBackProps> = ({ navigationData }) => {

  return (
    <Box className="boxBackgroundContainer">
        <Paper className="boxBackgroundimgpaper" elevation={0}>
          <Stack>
            <Typography>
              <Link
                component={RouterLink}
                to={navigationData[0]?.to}
                className="breadHeader"
              >
                {navigationData[0]?.label}
              </Link>
            </Typography>
            <Typography>
              {navigationData && (
                <Breadcrumbs
                  className="breadcrumbsNew"
                  separator={
                    <NavigateNextIcon
                      style={{ color: "#fff" }}
                      fontSize="small"
                    />
                  }
                  aria-label="breadcrumb"
                >
                  {navigationData?.slice(1)?.map((item, index) => (
                    <Link
                      key={index}
                      className={
                        index === navigationData.length - 2
                          ? "breadHeaderActive"
                          : "breadHeader1"
                      }
                      component={RouterLink}
                      to={item?.to}
                      onClick={item?.onClick}
                    >
                      {item?.label}
                    </Link>
                  ))}
                </Breadcrumbs>
              )}
            </Typography>
          </Stack>
        </Paper>
      {/* </Box> */}
    </Box>
  );
};

PageBack.propTypes = {
  navigationData: PropTypes.array.isRequired,
};

export default PageBack;
