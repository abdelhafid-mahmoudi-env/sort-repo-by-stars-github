import React from 'react'
import * as Props from "../addons/repo/prop";
import * as Flex from "./flex-card";
import moment from "moment";

const redirect = (repositoryUrl: string) => window.open(repositoryUrl, "_blank");

const CardRepository: React.FC<Props.Repository> = (props) => (
    <Flex.Container>
        <Flex.Avatar source={props.avatar} />
        <Flex.Content>
            <Flex.Header callback={() => redirect(props.html_url)} title={props.name} />
            <Flex.Description description={props.description} />
            <Flex.Footer>
                <Flex.Icon icon="star icon" name="stars" color="yellow" counter={props.stars} />
                <Flex.Icon icon="fork icon" name="issues" color="red" counter={props.issues} />
                <Flex.Submited>
                    Submitted {moment(props.created_at).fromNow()} by {props.username}
                </Flex.Submited>
            </Flex.Footer>
        </Flex.Content>
    </Flex.Container>
);

export default CardRepository
