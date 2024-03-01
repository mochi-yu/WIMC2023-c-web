import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
admin.initializeApp();

import * as express from "express";
import * as cors from "cors";
import { recordRouter } from "./handler/records";
import { placeRouter } from "./handler/places";
import { userRouter } from "./handler/users";

const app = express();
app.use(cors({ origin: true }));
app.use([recordRouter, placeRouter, userRouter]);

exports.v1 = functions.https.onRequest(app);
