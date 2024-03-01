import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
admin.initializeApp();

import * as express from "express";
import * as cors from "cors";
import { recordRouter } from "./handler/records";
import { placeRouter } from "./handler/places";
import { userRouter } from "./handler/users";
import { AddNewUserController } from "./usecase/auth";

const app = express();
app.use(cors({ origin: true }));
app.use([recordRouter, placeRouter, userRouter]);

exports.v1 = functions.https.onRequest(app);

// ユーザ作成時に呼ばれる処理
exports.addNewUser = functions.auth.user().onCreate(AddNewUserController);
