import styled from "styled-components";

const Drawer = styled.div`
  width: 350px;
  border: 2px solid green;
  margin: auto;
  height: 550px;
`;
const DrawerItem = styled.div`
  width: 300px;
  /* border: 2px solid green; */
  margin: auto;
  height: 80px;
`;

const Logo = styled.img`
  width: 50px;
  height: 50px;
  float: left;
  position: relative;
  top: 13px;
  left: 15px;
`;

const Button = styled.a`
  font-size: 24px;
  font-weight: 700;
  position: relative;
  top: 15px;
  left: 40px;
  cursor: pointer;
  /* border: 1px solid red; */
  padding: 10px;
  color: grey;
  text-align: left;
  float: left;
`;

function SideBar() {
  return (
    <Drawer>
      <DrawerItem label="Inbox" icon="">
        <Logo src="https://cdn1.iconfinder.com/data/icons/logos-and-brands-3/512/172_Inbox_logo_logos-512.png" />
        <Button>Inbox</Button>
      </DrawerItem>
      <DrawerItem>
        <Logo src="https://cdn0.iconfinder.com/data/icons/email-outline-1/64/emails-outline-1-09-512.png" />
        <Button>Starred</Button>
      </DrawerItem>
      <DrawerItem>
        <Logo src="https://cdn3.iconfinder.com/data/icons/line/36/email_send-512.png" />
        <Button>Send Email</Button>
      </DrawerItem>
      <DrawerItem>
        <Logo src="https://cdn3.iconfinder.com/data/icons/email-line-style-1/32/Email_draft_email_report-512.png" />
        <Button>Drafts</Button>
      </DrawerItem>
      <hr />
      <DrawerItem>
        <Logo src="https://www.iconpacks.net/icons/1/free-mail-icon-142-thumb.png" />
        <Button>All Mail</Button>
      </DrawerItem>
      <DrawerItem>
        <Logo src="https://cdn-icons-png.flaticon.com/512/81/81132.png" />
        <Button>Trash</Button>
      </DrawerItem>
    </Drawer>
  );
}

export default SideBar;
