import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { AnimalProvider } from "./animal/AnimalProvider"
import { CustomerProvider } from "./customers/CustomerProvider"
import { EmployeeProvider } from "./employees/EmployeeProvider"
import { LocationProvider } from "./locations/LocationProvider"
import { EmployeeForm } from "./employees/EmployeeForm"
import { AnimalForm } from "./animal/AnimalForm"
import { AnimalList } from "./animal/AnimalList"
import { CustomerList } from "./customers/CustomerList"
import { EmployeeList } from "./employees/EmployeeList"
import { LocationList } from "./locations/LocationList"
import { LocationForm } from "./locations/LocationForm"
import { AnimalDetail } from "./animal/AnimalDetail"



export const ApplicationViews = () => {
    return (
      <>
        <Route exact path="/">
          <Home />
        </Route>

        <AnimalProvider>
          <LocationProvider>
            <CustomerProvider>
              <Route exact path="/animals">
                <AnimalList></AnimalList>
              </Route>
              <Route path="/animals/create">
                <AnimalForm></AnimalForm>
              </Route>
              <Route exact path="/animals/detail/:animalId(\d+)">
                <AnimalDetail />
              </Route>
            </CustomerProvider>
          </LocationProvider>
        </AnimalProvider>

        <CustomerProvider>
          <Route exact path="/customers">
            <CustomerList />
          </Route>
        </CustomerProvider>

        <EmployeeProvider>
          <Route exact path="/employees">
            <EmployeeList />
          </Route>

          <LocationProvider>
            <Route exact path="/employees/create">
              <EmployeeForm></EmployeeForm>
            </Route>
          </LocationProvider>
        </EmployeeProvider>

        <LocationProvider>
          <Route exact path="/locations">
            <LocationList />
          </Route>

          <Route exact path="/locations/create">
            <LocationForm />
          </Route>
        </LocationProvider>
      </>
    );
}
