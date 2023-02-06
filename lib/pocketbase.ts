import PB, { Admin, BaseAuthStore, Record } from "pocketbase"



export class SpotifyAuthStore extends BaseAuthStore{
    _accessToken:string=''
    save(token: string, model: Record | Admin | null): void {
        super.save(token,model);
        }
    get accessToken():string{
        return this._accessToken
    }
    set accessToken(aT){
        this._accessToken=aT
    }
    }
    
    


export const pb=  new PB('http://127.0.0.1:8090', new SpotifyAuthStore())


