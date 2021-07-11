import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import apollo for angular
import { Apollo, gql } from 'apollo-angular';

const DUTIES_QUERY = gql`
  query getDuties {
    getDuties {
      _id
      name
    }
  }
`;

const DUTY_QUERY = gql`
  query getDuty($id: ID!) {
    getDuty(_id: $id) {
      _id
      name
    }
  }
`;

const CREATE_DUTY_MUTATION = gql`
  mutation createDuty($input: DutyInput) {
    createDuty(input: $input) {
      _id
      name
    }
  }
`;

const UPDATE_DUTY_MUTATION = gql`
  mutation updateDuty($id: ID!, $input: DutyInput) {
    updateDuty(_id: $id, input: $input) {
      _id
      name
    }
  }
`;

const DELETE_DUTY_MUTATION = gql`
  mutation deleteDuty($id: ID!) {
    deleteDuty(_id: $id) {
      _id
      name
    }
  }
`;

@Injectable({
  providedIn: 'root'
})
export class ToolsService {

  constructor(private apollo: Apollo) {}

  getDuties(): Observable<any> {
    return this.apollo.query({
      query: DUTIES_QUERY
    });
  }

  createDuty(nameDuty: string): Observable<any> {
    return this.apollo.mutate({
      mutation: CREATE_DUTY_MUTATION,
      variables: {
        input: {
          name: nameDuty
        }
      }
    });
  }

  viewDuty(idDuty: string): Observable<any> {
    return this.apollo.query({
      query: DUTY_QUERY,
      variables: {
        id: idDuty
      }
    });
  }

  updateDuty(idDuty: string, nameDuty: string): Observable<any> {
    return this.apollo.mutate({
      mutation: UPDATE_DUTY_MUTATION,
      variables: {
        id: idDuty,
        input: {
          name: nameDuty
        }
      }
    });
  }

  deleteDuty(idDuty: string): Observable<any> {
    return this.apollo.mutate({
      mutation: DELETE_DUTY_MUTATION,
      variables: {
        id: idDuty
      }
    });
  }

}
