import React, { Component } from "react";
import Link from "next/link";
import styled from "styled-components";
import Tippy from "@tippy.js/react";
import "tippy.js/dist/tippy.css";

const Avatar = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 25px;
  display: inline-block;
  cursor: pointer;
`;

const Dropdown = styled.div`
  width: 150px;
  right: 0px;
  position: absolute;
  background: white;
  border-radius: 8px;
  padding: 8px;
  box-shadow: 0 1px 6px 0 rgba(100, 105, 110, 0.3);
`;

const List = styled.ul`
  background: white;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const Item = styled.li`
  padding: 6px 8px;

  font-size: 14px;
  line-height: 18px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;
  
  a {
    color: #3d4045;
    display: block;
    text-decoration: none;
  }

  &:hover {
    background: #f4f5f6;
  }
  
  &:last-child {
    border-bottom: 0;
    a {
      color: #9aa1aa;
    }
  }

  
`;

const Container = styled.div`
  position: relative;
`;

class ProfileArea extends Component {
  state = { dropdownExpanded: false };

  componentWillMount() {
    document.addEventListener("mousedown", this.handleClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClick, false);
  }

  handleClick = e => {
    if (this.state.dropdownExpanded) {
      if (this.node.contains(e.target)) {
        return;
      }
      this.toggleDropdown();
    }
  };

  toggleDropdown = () => {
    this.setState({ dropdownExpanded: !this.state.dropdownExpanded });
  };

  render() {
    return (
      <Container innerRef={c => (this.node = c)}>
        <Avatar
          onClick={this.toggleDropdown}
          src={this.props.currentUser.avatar_url}
        />
        {this.state.dropdownExpanded && (
          <Dropdown>
            <List>
              <Item>
                <Link
                  as={`/@${this.props.currentUser.username}`}
                  href={`/profile?username=${this.props.currentUser.username}`}
                >
                  <a>Profile</a>
                </Link>
              </Item>
              <Item>
                <a href="/logout">Log out</a>
              </Item>
            </List>
          </Dropdown>
        )}
      </Container>
    );
  }
}

export default ProfileArea;
