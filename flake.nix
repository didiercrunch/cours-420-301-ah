{
  description = "The 420-320-AH course";
  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils }:
     flake-utils.lib.eachDefaultSystem (system:
       let
         pkgs = nixpkgs.legacyPackages.${system};
         git-hash = if (self ? rev) then builtins.substring 0 8 self.rev else "dirty";
         last-updated = if (self ? lastModified) then builtins.toString self.lastModified else "0";
         
      
        python = pkgs.python3.withPackages(ps: with ps; [numpy
                                                         pandas
                                                         requests
                                                         ipdb
                                                         matplotlib
                                                         duckdb
                                                         pyarrow
                                                         jupyter
                                                         pytest
                                                         faker]);
       in
       {
         packages = {};
         devShells.default = pkgs.mkShell {
            buildInputs = with pkgs; [deno
                                      nodePackages.jsdoc
                                      python];
            shellHook = ''
            alias build-docs=${pkgs.deno}/bin/deno doc --html --name="Programmation Client II" --output=./docs/ ./modules-examples/mod.js
            '';
         };
       }
     );
}
