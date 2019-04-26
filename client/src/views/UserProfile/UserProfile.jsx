import React, { Component } from "react";
import {
  Grid,
  Row,
  Col,
  FormGroup,
  ControlLabel,
  FormControl
} from "react-bootstrap";

import { Card } from "components/Card/Card.jsx";
import { FormInputs } from "components/FormInputs/FormInputs.jsx";
import { UserCard } from "components/UserCard/UserCard.jsx";
import Button from "components/CustomButton/CustomButton.jsx";

import avatar from "assets/img/faces/face-3.jpg";
import { CSVLink, CSVDownload } from "react-csv";
class UserProfile extends Component {
  
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={8}>
              <Card
                title="Perfil del paciente"
                content={
                  <form>
                    <FormInputs
                      ncols={["col-md-5", "col-md-3", "col-md-4"]}
                      proprieties={[
                        {
                          label: "Apellido",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Company",
                          defaultValue: "Quintero",
                          disabled: true
                        },
                        {
                          label: "Nombre",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Username",
                          defaultValue: "Juan F.",
                          disabled: true
                        },
                        {
                          label: "Sexo",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Email",
                          defaultValue:  "Masculino",  
                          disabled: true
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-6", "col-md-6"]}
                      proprieties={[
                        {
                          label: "Nacionalidad",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "First name",
                          defaultValue: "Argentina",
                          disabled: true
                        },
                        {
                          label: "Direccion",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Last name",
                          defaultValue: "Corrientes 1022, CABA",
                          disabled: true
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-4", "col-md-4", "col-md-4"]}
                      proprieties={[
                        {
                          label: "Tipo de sangre",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "City",
                          defaultValue: "A +",
                          disabled: true
                        },
                        {
                          label: "Numero ID",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Country",
                          defaultValue: "34879332",
                          disabled: true
                        },
                        {
                          label: "Ocupacion",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "ZIP Code",
                          defaultValue: "Ingeniero",
                          disabled: true
                        }
                      ]}
                    />

                    <Row>
                      <Col md={12}>
                        <FormGroup controlId="formControlsTextarea">
                          <ControlLabel>Datos clínicos relevantes</ControlLabel>
                          <FormControl
                            rows="5"
                            componentClass="textarea"
                            bsClass="form-control"
                            placeholder="Here can be your description"
                            defaultValue="Alergico a la penicilina"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <div className="clearfix" />
                  </form>

 
                  }

                
              />
              <CSVLink data={[
  ["Alergico a la penicilina"]
]}>Download me</CSVLink>

            </Col>
            <Col md={4}>
              <UserCard
                bgImage="https://ununsplash.imgix.net/photo-1431578500526-4d9613015464?fit=crop&fm=jpg&h=300&q=75&w=400"
                avatar={avatar}
                name="Juan F. Quintero"
              />
            </Col>
          </Row>
        </Grid>>
      </div>
    );
  }
}

export default UserProfile;
