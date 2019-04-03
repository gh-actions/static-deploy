workflow "New workflow" {
  on = "push"
  resolves = [
    "Deploy",
  ]
}

action "Choose master" {
  uses = "actions/bin/filter@3c98a2679187369a2116d4f311568596d3725740"
  secrets = ["GITHUB_TOKEN"]
  args = "branch master"
}

action "Install deps" {
  uses = "actions/npm@master"
  args = "install"
  needs = ["Choose master"]
}

action "Generate" {
  uses = "actions/npm@master"
  args = "run generate"
  needs = ["Install deps"]
}

action "Deploy" {
  uses = "comfuture/ghpages@38233d7"
  secrets = [
    "GITHUB_TOKEN",
    "GH_PAT",
  ]
  env = {
    BUILD_DIR = "dist/"
  }
  needs = ["Generate"]
}
