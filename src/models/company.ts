export class Company {
  constructor(
    public id: number,
    public nameEN: string,
    public nameAR: string,
    public status: boolean = true,
    public sectorEN: string,
    public natID: string,
    public phone: string
  ) {}
}
